import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('options')
class Option{
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column('int')
    manual_organization: number
    @Column('int')
    experience_organization: number
    @Column('int')
    form_team: number
    @Column('int')
    set_interval: number
    @Column('int')
    various_scales: number
}
export default Option