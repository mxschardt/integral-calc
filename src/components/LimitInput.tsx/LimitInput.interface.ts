import { ChangeEvent } from "react";

interface LimitInputProps {
  id: string;
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export default LimitInputProps;
