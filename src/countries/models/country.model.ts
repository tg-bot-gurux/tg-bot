import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'countries' })
export class CountryModel extends Model {
    @Column({ type: DataType.STRING, allowNull: false })
    name: { common: string; official?: string }

    @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: true })
    capital?: string[]

    @Column({ type: DataType.STRING, allowNull: true })
    region?: string

    @Column({ type: DataType.BIGINT, allowNull: true })
    population?: number
}
