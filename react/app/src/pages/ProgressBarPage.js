import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";

export default function RatingPage() {


  return (
    <div>
        <h1>Прогресс бар</h1>
        <ProgressBar value={50} />
    </div>
  );
}