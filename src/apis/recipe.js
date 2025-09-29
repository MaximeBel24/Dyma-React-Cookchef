const RECIPE_API = "https://restapi.fr/api/recipes";

export async function getRecipes(queryParam) {
    const response = await fetch(
        `${RECIPE_API}${queryParam ? `?${queryParam}` : ''}`
    );
    if (response.ok) {
        const body = await response.json();
        return Array.isArray(body) ? body : [body];
    } else {
        throw new Error('Could not get recipes from API');
    }
}
export async function getRecipe(_id) {
    const response = await fetch(`${RECIPE_API}/${_id}`);
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Could not get recipe from API');
    }
}

export async function deleteRecipe(_id) {
    const response = await fetch(`${RECIPE_API}/${_id}`,{
        method: 'DELETE',
    });
    if (response.ok) {
        return _id;
    } else {
        throw new Error('Could not delete recipe from API');
    }
}

export async function updateRecipe(updatedRecipe) {
    const { _id, ...restRecipes } = updatedRecipe;
    const response = await fetch(`${RECIPE_API}/${_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(restRecipes),
    });
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Could not update recipe from API');
    }
}

export async function createRecipe(newRecipe) {
    const response = await fetch(RECIPE_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecipe),
    });
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Could not create recipe from API');
    }
}