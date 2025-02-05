import React from "react";
import { observer } from "mobx-react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";
import AddAuthorCard from "./AddAuthorCard";

// Store
import authorStore from "./stores/AuthorStore";

const AuthorsList = () => {
  const authorCards = authorStore.filteredAuthors.map(author => (
    <AuthorCard key={author.id} author={author} />
  ));

  return (
    <div className="authors">
      <h3>Authors</h3>
      <SearchBar store={authorStore} />

      <div className="row">
        {authorStore.user ? <AddAuthorCard /> : ""}
        {authorCards}
      </div>
    </div>
  );
};

export default observer(AuthorsList);
