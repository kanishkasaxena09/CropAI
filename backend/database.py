import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

load_dotenv()

SQLALCHEMY_DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "mysql+pymysql://root:123456@localhost/cropai_db"
)

# Use pure-python pg8000 driver for seamless Windows compatibility
try:
    import psycopg2
    default_driver = "postgresql+psycopg2://"
except Exception:
    default_driver = "postgresql+pg8000://"

if SQLALCHEMY_DATABASE_URL.startswith("postgres://"):
    SQLALCHEMY_DATABASE_URL = SQLALCHEMY_DATABASE_URL.replace("postgres://", default_driver, 1)
elif SQLALCHEMY_DATABASE_URL.startswith("postgresql://") and not SQLALCHEMY_DATABASE_URL.startswith("postgresql+"):
    SQLALCHEMY_DATABASE_URL = SQLALCHEMY_DATABASE_URL.replace("postgresql://", default_driver, 1)

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
