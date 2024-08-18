import { memo, useEffect, useMemo, useRef, useState } from "react";
import styles from "./Select.module.scss";
import { Input } from "../Input";

type TOption = {
  label: string;
  value: number;
};

type TSelectProps = {
  label: string;
  options: TOption[];
  onApplyOption: (value: number) => void;
};

export const Select: React.FC<TSelectProps> = memo(
  ({ label, options, onApplyOption }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<number>(
      options[0].value
    );
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const onOptionClick = (value: number) => {
      setSelectedValue(value);
      onApplyOption(value);

      setIsOpen(false);
    };

    useEffect(() => {
      const onClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", onClickOutside);

      return () => {
        document.removeEventListener("mousedown", onClickOutside);
      };
    }, []);

    const filteredOptions = useMemo(
      () => options.filter((option) => option.value !== selectedValue),
      [options, selectedValue]
    );

    const selectedLabel = options.find(
      (option) => option.value === selectedValue
    )?.label;

    return (
      <div
        className={styles.selectContainer}
        onClick={toggleDropdown}
        ref={dropdownRef}
      >
        <div className={styles.select}>
          <Input label={label} value={selectedLabel} isPreventDefault />

          {isOpen && (
            <div className={styles.dropdown}>
              {filteredOptions.map((option) => (
                <div
                  key={option.value}
                  className={styles.option}
                  onClick={() => onOptionClick(option.value)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);
