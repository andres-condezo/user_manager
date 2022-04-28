import useForm from './hooks/useForm';

function App() {
  const [myForm, handleChange] = useForm({ name: '' });

  console.log(myForm);
  return (
    <form>
      <input
        name="name"
        placeholder="Name"
        value={myForm.name}
        onChange={handleChange}
      />
    </form>
  )
}

export default App;
