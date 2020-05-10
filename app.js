$(function () {
    $('.kanban-state').sortable({
        connectWith: '.kanban-state'
    });

    $('.kanban-state').on('sortremove', function (e, ui) {
        const jsonData = mapKanbanStates();
        console.log(jsonData);
    });

    $('.kanban-card').dblclick(function(e) {
        $(e.currentTarget).remove();

        console.log(mapKanbanStates());
    });
});

const mapKanbanStates = () => {
    var elements = [];
    var kanbanStates = $('.kanban-state');
    kanbanStates.each(function (index) {
        var elemIds = $(this).sortable('toArray');
        elements.push([]);
        elemIds.forEach(elemId => {
            elements[index].push({
                state: index,
                value: $(`#${elemId}`).data('task')
            });
        });
    });
    return JSON.stringify(elements);
};