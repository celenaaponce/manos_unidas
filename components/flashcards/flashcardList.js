import React from "react";
import { lazy, Suspense } from "react";
import classes from './flashcardList.module.css'

const Flashcard = lazy(() => import('./flashcard'))

export default function FlashcardList({ flashcards, onWatch }) {

  return (
    <div className={classes.meals}>
      {flashcards.map((flashcard) => (
        <Suspense fallback={<p>Cargando...</p>} key={flashcard.id}>
          <Flashcard
            flashcard={flashcard}
            onWatch={onWatch}
          />
        </Suspense>
      ))}
    </div>
  );
}