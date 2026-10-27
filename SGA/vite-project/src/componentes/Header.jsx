import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import GlobalStyles from "@mui/material/GlobalStyles"
import Toolbar from "@mui/material/Toolbar"
import { Link } from "react-router-dom"
import "../index.css"
import SelectorTema from "./SelectorTema"

export default function Header() {
    return (
        <>
            <GlobalStyles
                styles={(theme) => {
                    const accent = theme.palette.mode === "dark"
                        ? theme.palette.primary.light
                        : theme.palette.primary.main
                    return {
                        ":root": {
                            colorScheme: theme.palette.mode,
                            color: theme.palette.text.primary,
                            background: theme.palette.background.default,
                            "--sga-page": theme.palette.background.default,
                            "--sga-surface": theme.palette.background.paper,
                            "--sga-text": theme.palette.text.primary,
                            "--sga-muted": theme.palette.text.secondary,
                            "--sga-border": theme.palette.divider,
                            "--sga-accent": accent,
                            "--sga-accent-hover": theme.palette.mode === "dark"
                                ? theme.palette.primary.main
                                : theme.palette.primary.dark,
                            "--sga-button-text": "#17232d",
                            "--sga-button-hover-text": "#fff",
                            "--sga-soft": theme.palette.action.hover,
                            "--sga-danger": theme.palette.error.main,
                        },
                    }
                }}
            />
            <AppBar
                    component="header"
                    position="static"
                    elevation={0}
                    sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                        bgcolor: "background.paper",
                        color: "text.primary",
                    }}
                >
                    <Toolbar
                        sx={{
                            width: "min(calc(100% - 48px), 1120px)",
                            minHeight: { xs: 76, sm: 88 },
                            mx: "auto",
                            px: "0 !important",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            columnGap: 3,
                            rowGap: 1,
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                            <Box
                                component="img"
                                src="/sga-emblema.svg"
                                alt="Emblema del Sistema de Gestión Académica"
                                sx={{ width: 44, height: 44 }}
                            />
                            <Box
                                component="span"
                                sx={{ fontSize: "1.25rem", fontWeight: 750, letterSpacing: "-0.03em" }}
                            >
                                SGA
                            </Box>
                        </Box>
                        <Box
                            component="nav"
                            aria-label="Navegación principal"
                            sx={{ display: "flex", alignItems: "center", gap: 0.5, flexWrap: "wrap" }}
                        >
                            <Button component={Link} to="/" color="inherit">Inicio</Button>
                            <Button component={Link} to="/alumnos" color="inherit">Alumnos</Button>
                            <Button component={Link} to="/ayuda" color="inherit" aria-label="Ayuda">?</Button>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                "& > .MuiBox-root": { width: "auto", mb: 0 },
                            }}
                        >
                            <SelectorTema />
                        </Box>
                    </Toolbar>
            </AppBar>
        </>
    )
}