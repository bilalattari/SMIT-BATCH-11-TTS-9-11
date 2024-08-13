function ThemeText({ text , underline , className }) {
  return <h1 className={
    `my-2 font-serif text-primary
     ${underline ? 'underline' : ''}
     ${className    }`
  }>{text}</h1>;
}

export default ThemeText;
