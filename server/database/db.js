import mongoose from 'mongoose';

const Connection = async () => {
    const URL = 'mongodb+srv://harshshahth14:$Arsenalfc14@cluster0.pflz5tt.mongodb.net/?retryWrites=true&w=majority'
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;