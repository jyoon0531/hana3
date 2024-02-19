import { ChangeEvent, useRef, useState } from 'react';

const CITIES = ['Seoul', 'Busan', 'Jeju'];

export default function Sample() {
  // 선언부의 변수는 re-render할 때마다 실행
  const [nickname, setNickname] = useState('HONG');
  const [address, setAddress] = useState('Seoul'); // React에게 상태를 선언해서 전달
  const [age, setAge] = useState(0);
  // 값(데이터)를 담는 용도, view에 변화를 주지 않지만 값을 체크하고 싶을 때
  const nameChangeCnt = useRef(0);

  const changeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
    nameChangeCnt.current += 1;
  };
  //   const changeAddress = (e: ChangeEvent<HTMLInputElement>) => {
  //     setAddress(e.currentTarget.value);
  //   };
  return (
    <>
      <div>
        <h1>Sample</h1>
        <h5>
          Nickname: {nickname}({age}세) - {address}
        </h5>
        <input type='text' value={nickname} onChange={changeNickname} />
        <input
          type='number'
          value={age}
          onChange={(e) => setAge(+e.currentTarget.value)}
        />
        <input
          type='text'
          value={address}
          onChange={(e) => setAddress(e.currentTarget.value)}
          //   onChange={changeAddress}
        />
        <select onChange={(e) => setAddress(e.currentTarget.value)}>
          {CITIES.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <button onClick={() => alert(nameChangeCnt.current)}>TTT</button>
      </div>
    </>
  );
}

// 1개의 파일은 1개의 export
