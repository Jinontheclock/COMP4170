import pg from "pg";

async function setupDatabase() {
  const adminClient = new pg.Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "123",
    database: "postgres"
  });

  try {
    await adminClient.connect();
    console.log("✓ Connected to PostgreSQL server");

    try {
      await adminClient.query("CREATE DATABASE quiz;");
      console.log("✓ Created database 'quiz'");
    } catch (err) {
      if (err.message.includes("already exists")) {
        console.log("✓ Database 'quiz' already exists");
      } else {
        throw err;
      }
    }

    await adminClient.end();

    const db = new pg.Client({
      host: "localhost",
      port: 5432,
      user: "postgres",
      password: "123",
      database: "quiz"
    });

    await db.connect();
    console.log("✓ Connected to database 'quiz'");

    await db.query(`
      CREATE TABLE IF NOT EXISTS results (
        id SERIAL PRIMARY KEY,
        result_type TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("✓ Created table 'results'");

    await db.end();
    console.log("\n✓ Database setup complete!");
  } catch (err) {
    console.error("✗ Database setup failed:", err.message);
    process.exit(1);
  }
}

setupDatabase();
