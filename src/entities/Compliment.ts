import {Entity, PrimaryColumn, Column, CreateDateColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Tag } from "./Tag";
import { v4 as uuid } from "uuid";

@Entity("compliments")
class Compliment {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    user_sender: string;

    @JoinColumn({name: "user_sender"})
    @ManyToOne(() => User)
    userSender: User

    @Column()
    user_receiver: string;

    @JoinColumn({name: "user_receiver"})
    @ManyToOne(() => User)
    userReceiver: User

    @Column()
    tag_id: string;

    @JoinColumn({name: "tag_id"})
    @ManyToOne(() => Tag)
    tagId: Tag

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Compliment };