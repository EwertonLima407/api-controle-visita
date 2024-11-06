import * as create from "./Create";
import * as getAll from "./GetAll";
import * as getById from "./GetById";
import * as deleteById from "./DeleteById";
import * as updateById from "./UpadateById";



export const SetoresController = {
    ...create,
    ...getAll,
    ...getById,
    ...deleteById,
    ...updateById,
};