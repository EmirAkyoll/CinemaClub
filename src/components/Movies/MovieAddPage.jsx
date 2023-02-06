import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'semantic-ui-react'
import { addNewMovie } from '../../store/actions/movieActions';

function MovieAdd() {
  const InfoBox = () => {
    return (
      <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '400px', height: '70px', borderRadius: '10px',
            backgroundColor: '#f9e4b1', border: '1px solid gray', position: 'absolute', top: '-35px', color: 'black', zIndex: '20', opacity: '0.9' }}>
        New movie added.
      </div>
    )
  }

  const dispatch = useDispatch();
  const movieState = useSelector(state => state.movies)

  const [newMovieAdded, setNewMovieAdded] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    publishedYear: ''
  })

  function handleChanges(e) {
    const temporaryFormDataValue = { ...formData };
    temporaryFormDataValue[e.target.name] = e.target.value;
    return setFormData(temporaryFormDataValue);
  }

  function onSumbit() {
    const dataToBeSent = movieState.movies;
    dataToBeSent.push({ ...formData });
    dispatch(addNewMovie(dataToBeSent));
    setNewMovieAdded(true)
    setFormData({ title: '', description: '', publishedYear: '' })
    setTimeout(() => {
      setNewMovieAdded(false)
    }, 1500);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
      {newMovieAdded && <InfoBox />}

      <div>
        <h2 style={{ marginBottom: '25px' }}>NEW MOVIE</h2>
        <Form>
          <Form.Field style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '25px' }}>
            <label style={{ marginRight: '15px', fontSize: '17px' }}>Title:</label>
            <input
              type='text'
              id='title'
              name='title'
              value={formData.title}
              onChange={handleChanges}
              placeholder='Enter Title..'
              style={{ width: '500px', border: '1px solid gray' }}
            />
          </Form.Field>

          <Form.Field style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
            <label style={{ marginRight: '15px', fontSize: '17px' }}>Description:</label>
            <textarea
              type='text'
              id='description'
              name='description'
              value={formData.description}
              onChange={handleChanges}
              placeholder='Enter Description'
              style={{ width: '500px', border: '1px solid gray' }}
            />
          </Form.Field>

          <Form.Field style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <label style={{ marginRight: '15px', fontSize: '17px' }}>Published Year:</label>
            <input
              type='text'
              id='publishedYear'
              name='publishedYear'
              value={formData.publishedYear}
              onChange={handleChanges}
              placeholder='Enter Published Year'
              style={{ width: '450px', border: '1px solid gray' }}
            />
          </Form.Field>

          <Button
            type='submit'
            onClick={onSumbit}
            style={{ backgroundColor: 'green', padding: '15px', color: 'white', marginTop: '25px' }}>
            Add Movie
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default MovieAdd;
