const Dashboard = async () => {
  // const response = await fetch("http://localhost:3000/api");
  // const { message } = await response.json();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <section className="flex gap-2 lg:gap-3 flex-col pt-4 items-center w-full max-w-4xl mx-auto px-5">
          {/* <h2 className="text-4xl">{message}</h2> */}
          <h2 className="text-4xl">Revenue</h2>
        </section>
      </main>
    </>
  );
};
export default Dashboard;
