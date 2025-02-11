interface HomePageProps {
    pageTitle: string,
    pageDescription: string,
}

const HomePage = ({pageTitle, pageDescription}: HomePageProps): JSX.Element => {
    return (
        <section className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        This is the
                        <strong className="font-extrabold text-red-700 sm:block"> Title. {pageTitle} </strong>
                    </h1>
                    {pageDescription}
                    <p className="mt-4 sm:text-xl/relaxed">
                    
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                        numquam ea!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HomePage;