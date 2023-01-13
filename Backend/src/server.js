const run = async() => {
    await mongoose.connect("mongodb+srv://fekede:pfhwJ8vIyI0VVAGs@cmsdb.ujpl5.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });


    app.listen(port, () => console.log(
        `Example app listening at http://localhost:${port}`,
    ));
};


module.exports = run;