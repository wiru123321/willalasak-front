export default function Error() {
    setTimeout(() => {
        location.replace("https://willalasak.pl/home");
    }, 200);
    return (
        <div className="w-[100vw] h-[100vh] m-auto flex justify-center items-center">
            <h2>Coś poszło nie tak!</h2>
        </div>
    );
}
