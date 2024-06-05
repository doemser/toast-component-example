export default function Home({ onToast }) {
  return (
    <>
      <button
        onClick={() => {
          onToast("This is the 'Success Message'");
        }}
      >
        Success Toast!
      </button>
      <hr />
      <button
        onClick={() => {
          onToast("This is the 'Error Message'");
        }}
      >
        Error Toast!
      </button>
      <hr />
    </>
  );
}
