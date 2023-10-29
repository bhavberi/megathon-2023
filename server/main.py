from os import getenv
from fastapi import FastAPI

from .db import db
from .routes import router

DEBUG = getenv("DEBUG", "false").lower() in ("true", "1", "t")

if DEBUG:
    app = FastAPI(
        debug=DEBUG,
        title="Team Pandavas",
        description="Team Pandavas API Server",
    )
else:
    app = FastAPI(
        debug=DEBUG,
        title="Team Pandavas",
        description="Team Pandavas API Server",
        docs_url=None,
        redoc_url=None
    )

app.include_router(router, prefix="", tags=["Main Router"])