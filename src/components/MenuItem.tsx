import Link from "next/link";
import { IconType } from "react-icons/lib/esm/iconBase";

export type IMenuItem = {
  title: string;
  address: string;
  Icon: IconType;
};

export default function MenuItem({ title, address, Icon }: IMenuItem) {
  return (
    <Link href={address} className="mr-4 hover:text-amber-600 lg:mr-6">
      <Icon className="mx-4 text-2xl sm:hidden" />
      <p className="my-2 hidden text-sm sm:inline">{title}</p>
    </Link>
  );
}
