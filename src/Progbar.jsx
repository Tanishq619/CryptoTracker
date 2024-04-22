export default function Progbar({ current, final, width1 }) {
  const wi = Math.round(Math.round(Math.trunc((current / final) * 100)));

  console.log("I am 1" + wi);
  console.log(Math.round(Math.trunc((current / final) * 100)));
  return (
    <div
      style={{
        width: `${width1}%`,
      }}
      className={`relative flex border-2 border-gray-700 flex-col gap-4 h-3 bg-gray-300 rounded-xl`}
    >
      <div
        style={{
          width: `${wi}%`,
        }}
        className={`bg-gray-400 absolute  h-full rounded-xl`}
      ></div>
    </div>
  );
}
