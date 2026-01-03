import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";

@Injectable()
export class JsonDbService {
  // console.log(process.cwd)
  private readonly dbPath = join(process.cwd(), "/db/db.json");

  async read<T = any>(): Promise<T> {
    const raw = await readFile(this.dbPath, "utf-8");
    return JSON.parse(raw);
  }

  async write(data: any): Promise<void> {
    await writeFile(this.dbPath, JSON.stringify(data, null, 2));
  }

  async getCollection<T>(key: string): Promise<T[]> {
    const db = await this.read<any>();
    return db[key] ?? [];
  }

  async setCollection<T>(key: string, value: T[]): Promise<void> {
    const db = await this.read<any>();
    db[key] = value;
    await this.write(db);
  }
}
