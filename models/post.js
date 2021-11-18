const db = require('../config/db');
const  
{
    Group,
    User,
    Character,
    UserGroup,
    UserGroupCharacter
} = require('./index');


class Post {
    constructor(id, user_name, password) {
        this.id = id;
        this.user_name = user_name;
        this.password = password;
    }

    save() {
        // let d = new Date();
        // let yyyy = d.getFullYear();
        // let mm = d.getMonth() + 1;
        // let dd = d.getDate();

        // let cratedAtDate =  `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO dragons_db.user(
            id, 
            user_name,
            password
        )
        VALUES(
            '${this.id}', 
            '${this.user_name}', 
            '${this.password}'
        )
        `;

        return db.execute(sql);
    }

    static findAll() {
        let sql = "SELECT * FROM posts;";

        return db.execute(sql);
    }

    static findById(id) {
        let sql = `SELECT * FROM posts WHERE id = ${id};`;

        return db.execute(sql);
    }
}

module.exports = Post

