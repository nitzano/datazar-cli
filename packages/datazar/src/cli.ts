#!/usr/bin/env node

import { anonColCommand } from "@datazar-cli/cli";
import { Command } from "commander";
import process from "node:process";

const program = new Command().alias("dbye");

program.addCommand(anonColCommand);
program.parse(process.argv);
