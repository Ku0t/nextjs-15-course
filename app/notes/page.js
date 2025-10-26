"use client";
import Editor from "@/components/Editor";
import MDX from "@/components/MDX";
import SideNav from "@/components/SideNav";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotesPage() {
  const [isViewer, setIsViewer] = useState(true);
  // const [text, setText] = useState("");
  const [showNav, setShowNav] = useState(false);
  const [note, setNote] = useState({
    content: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [noteIds, setNoteIds] = useState([]);
  const [savingNote, setSavingNote] = useState(false);

  const { currentUser, isLoadingUser } = useAuth();

  const searchParams = useSearchParams();

  function handleToggleViewer() {
    // isViewer = !isViewer
    // console.log("ISVIEWER: ", isViewer);
    setIsViewer(!isViewer);
  }

  function handleToggleMenu() {
    setShowNav(!showNav);
  }

  function handleCreateNote() {
    // create a new note
    setNote({
      content: "",
    });
    window.history.replaceState(null, "", "/notes");
    setIsViewer(false);
  }

  function handleEditNote(e) {
    // edit an existing note
    setNote({ ...note, content: e.target.value });
  }

  async function handleSaveNote() {
    if (!note?.content) {
      return;
    }
    setSavingNote(true);

    try {
      // see if note already exists in database
      if (note.id) {
        // then we have an existing note cause we have it's id, so write to existing note
        const notesRef = doc(db, "users", currentUser.uid, "notes", note.id);
        await setDoc(
          notesRef,
          {
            ...note,
          },
          { merge: true }
        );
      } else {
        // that means that it's a brand new note and will only contain the content field, so we can basically save a anew note to firebase
        const newId = note.content.replaceAll('#','').slice(0, 15) + "__" + Date.now();
        const notesRef = doc(db, "users", currentUser.uid, "notes", newId);
        const newDocInfo = await setDoc(notesRef, {
          content: note.content,
          createdAt: serverTimestamp(),
        });
        setNoteIds((curr) => [...curr, newId]);
        setNote({ ...note, id: newId });
        window.history.pushState(null, "", `?id=${newId}`);
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setSavingNote(false);
    }
  }

  useEffect(() => {
    // locally cache notes in a global context (like the one we alredy have, you perhaps just need an extra state)
    const value = searchParams.get("id");

    if (!value || !currentUser) {
      return;
    }

    async function fetchNote() {
      if (isLoading) {
        return;
      }
      try {
        setIsLoading(true);
        const notesRef = doc(db, "users", currentUser.uid, "notes", value);
        const snapshot = await getDoc(notesRef);
        const docData = snapshot.exists()
          ? { id: snapshot.id, ...snapshot.data() }
          : null;
        if (docData) {
          setNote({ ...docData });
        }
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchNote();
  }, [currentUser, searchParams]);

  // console.log("CURRENT USER: ", currentUser);
  if (isLoadingUser) {
    return <h6 className="text-gradient">Loading...</h6>;
  }

  if (!currentUser) {
    // if no user found, then boot them to the home page cause this is the notes page (for auth users only)
    window.location.href = "/";
  }

  return (
    <main id="notes">
      <SideNav
        handleCreateNote={handleCreateNote}
        noteIds={noteIds}
        setNoteIds={setNoteIds}
        showNav={showNav}
        setShowNav={setShowNav}
        setIsViewer={setIsViewer}
      />
      {!isViewer && (
        <Editor
          savingNote={savingNote}
          handleSaveNote={handleSaveNote}
          text={note.content}
          setText={handleEditNote}
          isViewer={isViewer}
          handleToggleViewer={handleToggleViewer}
          handleToggleMenu={handleToggleMenu}
        />
      )}
      {isViewer && (
        <MDX
          savingNote={savingNote}
          handleSaveNote={handleSaveNote}
          text={note.content}
          isViewer={isViewer}
          handleToggleViewer={handleToggleViewer}
          handleToggleMenu={handleToggleMenu}
        />
      )}
    </main>
  );
}
