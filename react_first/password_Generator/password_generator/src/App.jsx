import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (number) str += '1234567890';
    if (symbol) str += '~!@#$%^&*()-_=+[]{}|;:,.<>?/';
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, symbol]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  const passwordRef = useRef(null)

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

 

  return (
    <div className='flex flex-col bg-black w-full h-screen items-center justify-center'>
      <div className='bg-gray-700 w-[600px] h-[200px] p-10 capitalize text-white flex flex-col items-center gap-5'>
        <h2 className='font-bold text-2xl text-orange-500'>password generator</h2>
        <div className='flex rounded w-[100%] items-center justify-center'>
          <input
            id='text'
            type="text"
            className='pl-2 rounded w-[70%] h-8 placeholder-black'
            placeholder={password}
            ref={passwordRef}
            readOnly
          />
          <button className='px-4 h-8 capitalize bg-sky-500 rounded border-none font-semibold hover:bg-sky-700 ' onClick={copyPassword}>copy</button>
        </div>
        <div className='flex gap-4'>
          <input
            type="range"
            min={8}
            max={40}
            value={length}
            onChange={(event) => setLength(event.target.value)}

      
          />
          <p className='w-[80px]'>length: {length}</p>
          <div>
            <input
              type="checkbox"
              checked={number}
              onChange={() => setNumber((prev) => !prev)}
            />
            <span className='font-semibold px-1'>number</span>
          </div>
          <div>
            <input
              type="checkbox"
              checked={symbol}
              onChange={() => setSymbol((prev) => !prev)}
            />
            <span className='font-semibold px-1'>symbol</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


