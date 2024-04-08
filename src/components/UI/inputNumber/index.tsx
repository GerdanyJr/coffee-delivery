import styles from "./inputNumber.module.css";
import { Plus, Minus } from "@phosphor-icons/react";
export function InputNumber() {
  return (
    <div className={styles.inputContainer}>
      <button>
        <Minus color="#8047F8" size={14} />
      </button>
      <span>1</span>
      <button>
        <Plus color="#8047F8" size={14} />
      </button>
    </div>
  );
}
