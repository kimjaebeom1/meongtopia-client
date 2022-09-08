import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { Menu } from "./styles";

interface IMenuButtonProps {
  title: string;
  page: string;
}

export default function MenuButton(props: IMenuButtonProps) {
  const router = useRouter();

  const onClickMenu = () => {
    router.push(props.page);
  };

  return (
    <Menu onClick={onClickMenu} isActive={props.page + "/" === router.asPath}>
      {props.title}
    </Menu>
  );
}
