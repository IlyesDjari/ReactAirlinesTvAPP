import React, { useState } from 'react';
import '../layout/nav.scss'

interface SearchProps {
  search: (text:string) => void;
}
export const Search: React.FC<SearchProps> = (props) => {

  const [text, setText] = useState<string>('');
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.search(text);
  };

  return (
    <form onSubmit={ searchHandler }>
      <input id='searchbar'
        type="text"
        placeholder="search"
        value={ text }
        onChange={ onChangeHandler }
      />
    </form>
  );
};