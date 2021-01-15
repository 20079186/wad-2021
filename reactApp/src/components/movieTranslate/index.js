import React from "react";

export default ({ translations }) => {
  return (
    <>
      <p> En name {translations.english_name} </p>
      <p>Translations: {translations.name} </p>
    </>
  );
};