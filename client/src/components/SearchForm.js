import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const SearchForm = ({ setSearchQueryInformation }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/api/search?query=${text}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchQueryInformation(data.results);
      });
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="search-form mt-5">
        <FormGroup>
          <Label for="searchtext">Search</Label>
          <Input
            value={text}
            type="text"
            name="text"
            id="searchText"
            autoComplete="off"
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button className="mt-4">Submit</Button>
      </Form>
    </>
  );
};

export default SearchForm;
