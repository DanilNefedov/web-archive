import mongoose, { Schema } from 'mongoose';

const navigationSchema = new Schema({
    nav_name: String,
    title: String,
    description: String
});

const navThemeSchema = new Schema(
    {
        connection_id: String,
        theme: [{
            theme_name: String,
            navigation: [navigationSchema]
        }]
    },
    {
        timestamps: true,
    }
);


const Nav_Theme = mongoose.models.Nav_Theme || mongoose.model('Nav_Theme', navThemeSchema);
export default Nav_Theme;