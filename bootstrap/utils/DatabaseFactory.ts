export interface DatabaseFactory{

    
    //proprety definition
    databaseName: string | undefined;
    databaseHost: string | undefined;
    databasePort: string | undefined;
    username: string | undefined;
    password: string | undefined;
    
    /* function for creating connexion on a database */
    connexion():void ;

    /* function for deleting connexion on a database */
    disconnect():void;

}