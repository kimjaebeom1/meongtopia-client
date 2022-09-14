import styled from "@emotion/styled";
import Link from "next/link";

interface ILoginButtonProps {
  href: string;
  title: string;
}

const Login = styled.a`
  font-size: 0.9rem;
  line-height: normal;
  margin-left: 1rem;
  color: #999;
  cursor: pointer;
  :hover {
    color: #ffe812;
  }
`;

export default function LoginButton(props: ILoginButtonProps) {
  return (
    <Link href={props.href}>
      <Login>{props.title}</Login>
    </Link>
  );
}
