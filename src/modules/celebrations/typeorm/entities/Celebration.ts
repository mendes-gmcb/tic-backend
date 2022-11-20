import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('celebration')
class Celebration{
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    day: Date
    @Column('int')
    hour: number
    @Column()
    solemnitie: string
    @Column('int')
    confirm_celebration: number
}
export default Celebration