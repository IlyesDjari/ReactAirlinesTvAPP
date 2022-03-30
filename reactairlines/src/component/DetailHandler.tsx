import React, { useState } from 'react';

interface SearchProps {
  search: (text:string) => void;
}

export const Search: React.FC<SearchProps> = (props) => {

  const [id, setId] = useState<string>('');
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.currentTarget.value);
  };

  const detailHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.search(id);
  };

  return (
    <form onSubmit={ detailHandler }>
      <div></div>
    </form>
  );
};