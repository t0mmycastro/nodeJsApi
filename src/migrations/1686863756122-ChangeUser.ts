import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeUser1686863756122 implements MigrationInterface {
    name = 'ChangeUser1686863756122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`state\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`id\` varchar(36) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`name\` \`name\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`id\` varchar(36) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`product\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`id\` varchar(36) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` ADD \`id\` varchar(36) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`purchase\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`purchase\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`purchase\` ADD \`id\` varchar(36) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`id\` varchar(36) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_0dce9bc93c2d2c399982d04bef1\` FOREIGN KEY (\`category_id\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` ADD CONSTRAINT \`FK_32b6e478da3f612119ae05b3ab0\` FOREIGN KEY (\`purchase_id\`) REFERENCES \`purchase\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` ADD CONSTRAINT \`FK_e54c9a434e453a25cf998a9450b\` FOREIGN KEY (\`product_id\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`purchase\` ADD CONSTRAINT \`FK_d071415ec3e384acf6c5513fd35\` FOREIGN KEY (\`customer\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`purchase\` ADD CONSTRAINT \`FK_56979680a09b1ef32726bcb7468\` FOREIGN KEY (\`purchase_product_id\`) REFERENCES \`purchases_products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD CONSTRAINT \`FK_5d1f609371a285123294fddcf3a\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customer\` DROP FOREIGN KEY \`FK_5d1f609371a285123294fddcf3a\``);
        await queryRunner.query(`ALTER TABLE \`purchase\` DROP FOREIGN KEY \`FK_56979680a09b1ef32726bcb7468\``);
        await queryRunner.query(`ALTER TABLE \`purchase\` DROP FOREIGN KEY \`FK_d071415ec3e384acf6c5513fd35\``);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` DROP FOREIGN KEY \`FK_e54c9a434e453a25cf998a9450b\``);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` DROP FOREIGN KEY \`FK_32b6e478da3f612119ae05b3ab0\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_0dce9bc93c2d2c399982d04bef1\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`id\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`purchase\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`purchase\` ADD \`id\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`purchase\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` ADD \`id\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`purchases_products\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`id\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`id\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`name\` \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`id\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`state\``);
    }

}
