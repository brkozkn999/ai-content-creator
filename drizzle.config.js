/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://AI-Content-Generator_owner:8SJo2GsOKaiX@ep-round-bush-a53it64i.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require',
    }
};