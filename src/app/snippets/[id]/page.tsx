import { db } from '@/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ShowSnippetByIdProps {
  params: {
    id: string;
  };
}

const ShowSnippetById = async (props: ShowSnippetByIdProps) => {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) }
  });

  if (!snippet) {
    notFound();
  }

  return (
    <div className=" mx-auto p-3 mt-3 bg-white shadow-md rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800">{snippet.title}</h1>
        <div>
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600 transition duration-300"
          >
            Edit
          </Link>
          <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300">
            Delete
          </button>
        </div>
      </div>
      <pre className="bg-gray-100 rounded-md p-4 overflow-auto">
        <code className="text-gray-800 font-mono">{snippet.code}</code>
      </pre>
    </div>
  );
};

export default ShowSnippetById;
