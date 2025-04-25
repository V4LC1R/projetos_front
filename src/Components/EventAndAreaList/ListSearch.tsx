interface ListSearchProps {
  children: React.ReactNode;
}

export function ListSearch({ children }: ListSearchProps) {
  return (
    <div className="md:h-[300px] h-full overflow-y-auto rounded w-full flex flex-col  py-0.5 px-1 gap-1 scroll-smooth">
      <div className="flex flex-col gap-0.5" >
        { children }
      </div>
    </div>
  );
}
