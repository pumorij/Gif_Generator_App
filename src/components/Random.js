import Spinner  from './Spinner';
import useGif from '../hooks/useGif';


const Random = () => {

    const{gif,loading,fetchData} = useGif();

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>A Random Gif</h1>

      {
        loading? (<Spinner/>):(<img src={gif} width="450px" alt='gif'/>)
      }

      <button onClick={()=>fetchData()}
      className='w-8/12 bg-white text-lg py-2 rounded-lg mb-[20px]'>
      Generate
      </button>

    </div>
  )
}

export default Random
