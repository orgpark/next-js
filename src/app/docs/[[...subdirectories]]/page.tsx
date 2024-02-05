export default function Docs({
  params,
}: {
  params: {
    subdirectories: string[];
  };
}) {
  if (params.subdirectories?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params.subdirectories[0]} and concept {params.subdirectories[1]}
      </h1>
    );
  } else if (params.subdirectories?.length === 1) {
    return <h1>Viewing docs for feature {params.subdirectories[0]}</h1>;
  }
  return <h1>Docs page</h1>;
}
