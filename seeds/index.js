const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");
mongoose.set("strictQuery", true);

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20 + 10);
        const camp = new Campground({
            //내 ID
            author: "640b4f839bdb91349a8b4648",
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique cumque quidem, aut nesciunt numquam beatae. Soluta, quae amet cupiditate error id dolor. At veritatis, deserunt animi omnis dolore eos nisi!",
            price,
            geometry: {
                type: "Point",
                coordinates: [cities[random1000].longitude, cities[random1000].latitude],
            },
            images: [
                {
                    url: "https://res.cloudinary.com/dbcjggu3s/image/upload/v1678875853/YelpCamp/knzkjv1dsodwp1od4k5i.png",
                    filename: "YelpCamp/knzkjv1dsodwp1od4k5i",
                },
                {
                    url: "https://res.cloudinary.com/dbcjggu3s/image/upload/v1678875855/YelpCamp/ev7wdncab14muc89tk2b.png",
                    filename: "YelpCamp/ev7wdncab14muc89tk2b",
                },
                {
                    url: "https://res.cloudinary.com/dbcjggu3s/image/upload/v1678875857/YelpCamp/bxwyhsqlpqdffuahh4o9.png",
                    filename: "YelpCamp/bxwyhsqlpqdffuahh4o9",
                },
            ],
        });
        await camp.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
});
