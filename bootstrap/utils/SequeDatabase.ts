import { DatabaseFactory } from "./DatabaseFactory";

export   class SequeDatabase implements DatabaseFactory{

    private static databaseInstance: SequeDatabase | null | undefined;
    //proprety definition
    databaseName: string | undefined;
    databaseHost: string | undefined;
    databasePort: string | undefined;
    username: string | undefined;
    password: string | undefined;
    
    private constructor(){
        
        this.databaseName=process.env.DATABASENAME;
        this.databaseHost=process.env.DB_HOST;
        this.databasePort=process.env.DB_PORT;
        this.username = process.env.DB_USERNAME;
        this.password = process.env.DB_PASSWORD;
    }

    public static getDatabaseInstance(){
        return SequeDatabase.databaseInstance ? SequeDatabase.databaseInstance:new SequeDatabase();
    }

    connexion():void{

    }

    disconnect():void{

    }


}