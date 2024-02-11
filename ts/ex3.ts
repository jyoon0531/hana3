interface Naver {
  userid: number;
  username: string;
  email: string;
}
interface Kakao {
  userid: number;
  userName: string;
  kakaotalk: string;
  email: string;
}

interface SnsUser {
  [key: string]: string | number;
  userid: number;
  email: string;
}

// type SnsUser = (Naver | Kakao)

// interface SnsUser extends Partial<Naver>, Partial<Kakao> {
//   email: string;
// }

const naverUser: SnsUser = {
  userid: 1,
  username: "HH",
  email: "abc@naver.com",
};

const kakaoUser: SnsUser = {
  userid: 1,
  userName: "HH",
  kakaotalk: "HH",
  email: "abc@hanmail.net",
};
