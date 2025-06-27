import React, { useState, useRef, useEffect } from 'react';

type Option = {
  label: string;
  value: string | number;
};

interface MultiSelectProps {
  options: Option[];
  selected: Option[];
  onChange: (selected: Option[]) => void;
  placeholder?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selected,
  onChange,
  placeholder = 'Selecione...',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter(
    (option) =>
      option.label.toLowerCase().includes(search.toLowerCase()) &&
      !selected.some((s) => s.value === option.value)
  );

  const toggleOption = (option: Option) => {
    onChange([...selected, option]);
    setSearch('');
  };

  const removeOption = (option: Option) => {
    onChange(selected.filter((s) => s.value !== option.value));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-md" ref={ref}>
      <div
        className="border border-he-gray-400 rounded-[4px] p-2 flex flex-wrap gap-1 min-h-[42px] bg-white cursor-text"
        onClick={() => setIsOpen(true)}
      >
        {selected.map((option) => (
          <div
            key={option.value}
            className="flex items-center px-2 py-1 text-sm bg-he-green-100 text-white rounded-[4px]"
          >
            {option.label}
            <button
              className="ml-1 text-white hover:text-he-green-800 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                removeOption(option);
              }}
            >
              ×
            </button>
          </div>
        ))}
        <input
          type="text"
          className="flex-grow focus:outline-none p-1"
          placeholder={selected.length === 0 ? placeholder : ''}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
        />
      </div>

      {isOpen && filteredOptions.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full bg-white border-[0.5px] border-he-gray-400 rounded-[4px] shadow max-h-60 overflow-y-auto">
          {filteredOptions.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              onClick={() => toggleOption(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
